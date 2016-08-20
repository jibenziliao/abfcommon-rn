/**
 * 商城主框架界面
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
			    selectedTitleStyle={styles.tabnavselectedStyle}
			    titleStyle={styles.textStyle}
			    renderIcon={() => (<Icon name="home" size={24} style={[theme.tabnav]}/>)}
			    renderSelectedIcon={() => (<Icon name="home" size={24} style={[theme.tabnavselectedStyle]}/>)}
			    onPress={() => this.setState({ selectedTab: 'home' })}>
			    <Home {...this.props}/>
			  </TabNavigator.Item>
			  <TabNavigator.Item
			  	title="订单"
			    selected={this.state.selectedTab === 'order'}
			    selectedTitleStyle={styles.tabnavselectedStyle}
			    titleStyle={styles.textStyle}
                renderIcon={() => (<Icon name="file-text-o" size={24} style={[theme.tabnav]}/>)}
			    renderSelectedIcon={() => (<Icon name="file-text-o" size={24} style={[theme.tabnavselectedStyle]}/>)}
			    onPress={() => this.setState({ selectedTab: 'order' })}>
			    <Order {...this.props}/>
			  </TabNavigator.Item>
			  <TabNavigator.Item
			  	title="购物车"
			    selected={this.state.selectedTab === 'cart'}
			    selectedTitleStyle={styles.tabnavselectedStyle}
			    titleStyle={styles.textStyle}
                renderIcon={() => (<Icon name="shoping-cart" size={24} style={[theme.tabnav]}/>)}
			    renderSelectedIcon={() => (<Icon name="shoping-cart" size={24} style={[theme.tabnavselectedStyle]}/>)}
			    onPress={() => this.setState({ selectedTab: 'cart' })}>
			    <Cart {...this.props}/>
			  </TabNavigator.Item>
			  <TabNavigator.Item
			  	title="我的"
			    selected={this.state.selectedTab === 'center'}
			    selectedTitleStyle={styles.tabnavselectedStyle}
			    titleStyle={styles.textStyle}
                renderIcon={() => (<Icon name="user" size={24} style={[theme.tabnav]}/>)}
			    renderSelectedIcon={() => (<Icon name="user" size={24} style={[theme.tabnavselectedStyle]}/>)}
			    onPress={() => this.setState({ selectedTab: 'center' })}>
			    <Center {...this.props}/>
			  </TabNavigator.Item>
			</TabNavigator>
        );
    }
}
const styles=StyleSheet.create({
   iconStyle:{
       width:26,
       height:26,
   },
   textStyle:{
       color:'#999',
   },
   selectedTextStyle:{
       color:'#8192D6',
   }
});
export default AppMain;
