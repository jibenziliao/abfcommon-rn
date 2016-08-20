/**
 * 框架主界面
 */
'use strict';
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import Home from './Home';
import Order from './Order';
import Cart from './Cart';
import Center from './Center';

var theme = require('../style/theme');
var Icon = require('react-native-vector-icons/FontAwesome');

class AppMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
	  	      selectedTab:'home'
	      };
    }
    render() {
        return (
          <TabNavigator>
			  <TabNavigator.Item
			  	title="主页"
			    selected={this.state.selectedTab === 'home'}
			    selectedTitleStyle={theme.tabnavselectedStyle}
			    titleStyle={theme.textStyle}
			    renderIcon={() => (<Icon name="home" size={24} style={[theme.tabnav]}/>)}
			    renderSelectedIcon={() => (<Icon name="home" size={24} style={[theme.tabnavselectedStyle]}/>)}
			    onPress={() => this.setState({ selectedTab: 'home'})}>
			    <Home {...this.props}/>
			  </TabNavigator.Item>
			  <TabNavigator.Item
			  	title="订单"
			    selected={this.state.selectedTab === 'order'}
			    selectedTitleStyle={theme.tabnavselectedStyle}
			    titleStyle={theme.textStyle}
                renderIcon={() => (<Icon name="tags" size={24} style={[theme.tabnav]}/>)}
			    renderSelectedIcon={() => (<Icon name="tags" size={24} style={[theme.tabnavselectedStyle]}/>)}
			    onPress={() => this.setState({ selectedTab: 'order'})}>
			    <Order {...this.props}/>
			  </TabNavigator.Item>
			  <TabNavigator.Item
			  	title="购物车"
			    selected={this.state.selectedTab === 'cart'}
			    selectedTitleStyle={theme.tabnavselectedStyle}
			    titleStyle={theme.textStyle}
                renderIcon={() => (<Icon name="shopping-cart" size={24} style={[theme.tabnav]}/>)}
			    renderSelectedIcon={() => (<Icon name="shopping-cart" size={24} style={[theme.tabnavselectedStyle]}/>)}
			    onPress={() => this.setState({ selectedTab: 'cart'})}>
			    <Cart {...this.props}/>
			  </TabNavigator.Item>
			  <TabNavigator.Item
			  	title="我的"
			    selected={this.state.selectedTab === 'center'}
			    selectedTitleStyle={theme.tabnavselectedStyle}
			    titleStyle={theme.textStyle}
                renderIcon={() => (<Icon name="user" size={24} style={[theme.tabnav]}/>)}
			    renderSelectedIcon={() => (<Icon name="user" size={24} style={[theme.tabnavselectedStyle]}/>)}
			    onPress={() => this.setState({ selectedTab: 'center'})}>
			    <Center {...this.props}/>
			  </TabNavigator.Item>
			</TabNavigator>
        );
    }
}
const styles=StyleSheet.create({

});
export default AppMain;
