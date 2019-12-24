import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import Tab from './Tab/index';

import './index.scss';

const prefixCls = 'kai-tab-view';
const tabViewTabs = `${prefixCls}-tabs`;
const tabViewContent = `${prefixCls}-content`;

export default class TabView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
      isTransitionDone: true,
      activeChild: 0
    };
    this.children = [];
  }

  handleChangeIndex = tabIndex => {
    this.setState({isTransitionDone: false, activeTab: tabIndex});
  };

  handleTransitionEnd = () => {
    this.setState({isTransitionDone: true});
  };

  handleTabChange = (childIndex) => {
    const {getTabIndex} = this.props;
    this.setState({activeChild: childIndex});
    this.el.children[0].children[childIndex].scrollIntoView(true);
    this.el.scrollIntoView({
      behavior: 'auto',
      block: 'start',
      inline: 'center',
    });
    this.handleChangeIndex(childIndex);
    getTabIndex(childIndex);
  };

  handleKeyDown = (e) => {
    const {children} = this.props;
    const {activeChild} = this.state;
    let index = activeChild;
    switch (e.key) {
      case 'ArrowRight':
        index = Math.min(
          index + 1,
          React.Children.count(children) - 1
        );
        if (activeChild !== index) {
          this.handleTabChange(index);
        }
        break;
      case 'ArrowLeft':
        index = Math.max(index - 1, 0);
        if (activeChild !== index) {
          this.handleTabChange(index);
        }
        break;
      default:
        break;
    }
  };

  componentDidMount() {
    const {activeChild} = this.state;
    this.children[activeChild] && this.children[activeChild].focus();
  }

  componentDidUpdate() {
    const {activeChild} = this.state;
    this.children[activeChild] && this.children[activeChild].focus();
  }

  render() {
    const {tabLabels, focusColor, children} = this.props;
    const {activeTab, isTransitionDone, activeChild} = this.state;

    return (
      <div className={prefixCls} ref={(node) => this.el = node} tabIndex='-1' onKeyDown={this.handleKeyDown}>
        <div className={tabViewTabs}>
          {tabLabels.map((label, i) => (
            <Tab
              key={`key-${i}`}
              label={label}
              focusColor={focusColor}
              index={i}
              onTabChange={this.handleTabChange}
              isActive={activeChild === i}
            />))
          }
        </div>
        <div className={tabViewContent}>
          <SwipeableViews
            axis={'x'}
            index={activeChild}
            onTransitionEnd={this.handleTransitionEnd}
            disabled={true}
          >
            {
              children.map((child, i) => {
                return React.cloneElement(child, {
                  ref: el => this.children[i] = el,
                  isActive: activeTab === i && isTransitionDone
                })
              })
            }
          </SwipeableViews>
        </div>
      </div>
    )
  }
}
