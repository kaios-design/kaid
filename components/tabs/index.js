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
  }

  handleChangeIndex = tabIndex => {
    this.setState({isTransitionDone: false, activeTab: tabIndex});
  };

  handleTransitionEnd = () => {
    this.setState({isTransitionDone: true});
  };

  handleTabChange = (childIndex) => {
    this.setState({activeChild: childIndex});
    this.el.scrollIntoView({
      behavior: 'auto',
      block: 'start',
      inline: 'center',
    });
    this.handleChangeIndex(childIndex);
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

  render() {
    const {tabLabels, focusColor, children} = this.props;
    const {activeTab, isTransitionDone, activeChild} = this.state;

    const renderChildren = () => {
      return React.Children.map(children, (child, i) => {
        return React.cloneElement(child, {
          isActive: activeTab === i && isTransitionDone,
        });
      });
    };
    return (
      <div className={prefixCls} ref={(node) => this.el = node} tabIndex='-1' onKeyDown={this.handleKeyDown}>
        <div className={tabViewTabs}>
          {tabLabels.map((label, i) => (
            <Tab
              onChangeIndex={this.handleChangeIndex}
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
            index={activeTab}
            onChangeIndex={this.handleChangeIndex}
            onTransitionEnd={this.handleTransitionEnd}
            disabled={true}
          >
            {renderChildren()}
          </SwipeableViews>
        </div>
      </div>
    )
  }
}
