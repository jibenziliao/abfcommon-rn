/**
 * 商城主页
 */
'use strict';
import React, {Component} from 'react';
import{
    View,
    Text,
    Dimensions,
    Image,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    InteractionManager,
} from 'react-native';
import {IndicatorViewPager, PagerDotIndicator} from 'rn-viewpager';
import City from './City';
import Search from './Search';
import ShortLine from '../component/ShortLine';

var theme = require('../style/theme');

var Icon = require('react-native-vector-icons/FontAwesome');

var {height, width} = Dimensions.get('window');
var item_width = (width-1)/2;

const homeLocation = (<Icon name="paper-plane" size={20} color="#fff" />);
const homeSearch = (<Icon name="search" size={20} color="#fff" />);

const BANNER_IMGS = [
    require('../imgs/home/1.jpg'),
    require('../imgs/home/2.jpg'),
    require('../imgs/home/3.jpg'),
    require('../imgs/home/4.jpg')
];
const CENTER_IMGS = [
    require('../imgs/home/img_1.png'),
    require('../imgs/home/img_2.png'),
    require('../imgs/home/img_3.png'),
    require('../imgs/home/img_4.png'),
    require('../imgs/home/img_5.png'),
    require('../imgs/home/img_6.png'),
    require('../imgs/home/img_7.png'),
    require('../imgs/home/img_8.png')
];
class Home extends Component {
    constructor(props) {
        super(props);
        this.centerItemAction=this.centerItemAction.bind(this);
        this.topItemAction=this.topItemAction.bind(this);
    }
    centerItemAction(position){
        if(position === 0){

        }else if(position === 1){

        }else if(position === 2){

        }else if(position === 3){

        }
    }
    topItemAction(position){
        const {navigator} = this.props;
        if(position === 0){
            InteractionManager.runAfterInteractions(() => {
                navigator.push({
                    component: City,
                    name: 'City'
                });
            });
        }else if(position === 1){
            InteractionManager.runAfterInteractions(() => {
                navigator.push({
                    component: Search,
                    name: 'Search'
                });
            });
        }
    }
    _renderDotIndicator() {
        return <PagerDotIndicator pageCount={4} />;
    }
    render() {
        return (
            <View style={[theme.appbody]}>
                <View style={[theme.bar]}>
                    <View style={[theme.barleft]}>
                        <TouchableOpacity onPress={()=>{this.topItemAction(0)}}>
                            <View style={{justifyContent:'flex-start',flexDirection:'row',alignItems:'center'}}>
                                <Text style={[theme.bartitle]}>{homeLocation}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={[theme.barcenter]}>
                        <Text style={[theme.bartitle]}>基础应用</Text>
                    </View>
                    <View style={[theme.barright]}>
                        <TouchableOpacity onPress={()=>{this.topItemAction(1)}}>
                            <View>
                                <Text style={[theme.bartitle]}>{homeSearch}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
                    <IndicatorViewPager style={{height:140}} indicator={this._renderDotIndicator()}>
                        <View><Image source={BANNER_IMGS[0]}/></View>
                        <View><Image source={BANNER_IMGS[1]}/></View>
                        <View><Image source={BANNER_IMGS[2]}/></View>
                        <View><Image source={BANNER_IMGS[3]}/></View>
                    </IndicatorViewPager>

                    <View style={{marginTop:8}}>
                        <View style={{flexDirection:'row',backgroundColor:'white',paddingTop:10,paddingBottom:10}}>
                            <View style={{flex:1,marginLeft:8}}>
                                <TouchableOpacity onPress={()=>{this.centerItemAction(0)}}>
                                    <Image source={CENTER_IMGS[0]} style={{width:80,height:100}}>
                                        <View style={styles.center_item_wrap}>
                                            <Text style={styles.center_item_tv}>餐厅</Text>
                                        </View>
                                    </Image>
                                </TouchableOpacity>
                            </View>
                            <View style={{flex:1}}>
                                <TouchableOpacity onPress={()=>{this.centerItemAction(1)}}>
                                    <Image source={CENTER_IMGS[1]} style={{width:80,height:100}}>
                                        <View style={styles.center_item_wrap}>
                                            <Text style={styles.center_item_tv}>奶茶</Text>
                                        </View>
                                    </Image>
                                </TouchableOpacity>
                            </View>
                            <View style={{flex:1}}>
                                <TouchableOpacity onPress={()=>{this.centerItemAction(2)}}>
                                    <Image source={CENTER_IMGS[2]} style={{width:80,height:100}}>
                                        <View style={styles.center_item_wrap}>
                                            <Text style={styles.center_item_tv}>奶茶甜品</Text>
                                        </View>
                                    </Image>
                                </TouchableOpacity>
                            </View>
                            <View style={{flex:1}}>
                                <TouchableOpacity onPress={()=>{this.centerItemAction(3)}}>
                                    <Image source={CENTER_IMGS[3]} style={{width:80,height:100}}>
                                        <View style={styles.center_item_wrap}>
                                            <Text style={styles.center_item_tv}>新品推荐</Text>
                                        </View>
                                    </Image>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{marginTop:8,backgroundColor:'white'}}>
                        <View style={{height:40,justifyContent:'center',alignItems:'center'}}><Text>推荐活动</Text></View>
                        <View style={{flexDirection:'row',height:70}}>
                            <View style={{flexDirection:'row',width:item_width,marginTop:5}}>
                                <Image source={CENTER_IMGS[4]} style={{width:66,height:47,marginLeft:20}}/>
                                <View style={{marginLeft:10}}>
                                    <Text>每日优惠</Text>
                                    <Text style={{color:'#999',fontSize:13,marginTop:5}}>优惠早知道</Text>
                                </View>

                            </View>
                            <Image source={require('../imgs/home/ic_home_shu.png')} style={{height:60,marginTop:10}}/>
                            <View style={{flexDirection:'row',width:item_width,marginTop:8}}>
                                <Image source={CENTER_IMGS[5]} style={{width:40,height:53,marginLeft:20}}/>
                                <View style={{marginLeft:10}}>
                                    <Text>充值返现</Text>
                                    <Text style={{color:'#999',fontSize:13,marginTop:5}}>充100送50</Text>
                                </View>

                            </View>
                        </View>
                        <ShortLine/>
                        <View style={{flexDirection:'row',height:70}}>
                            <View style={{flexDirection:'row',width:item_width,marginTop:3}}>
                                <Image source={CENTER_IMGS[6]} style={{width:50,height:67,marginLeft:20}}/>
                                <View style={{marginLeft:10,marginTop:8}}>
                                    <Text>评论送积分</Text>
                                    <Text style={{color:'#999',fontSize:13,marginTop:5}}>评价免费拿积分</Text>
                                </View>
                            </View>
                            <Image source={require('../imgs/home/ic_home_shu.png')} style={{height:60}}/>
                            <View style={{flexDirection:'row',width:item_width,marginTop:8}}>
                                <Image source={CENTER_IMGS[7]} style={{width:40,height:40,marginLeft:20,marginTop:5}}/>
                                <View style={{marginLeft:10}}>
                                    <Text>嘎嘎商城</Text>
                                    <Text style={{color:'#999',fontSize:13,marginTop:5}}>注册嘎嘎商城</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{marginTop:8,backgroundColor:'white'}}>
                        <View style={{height:40,justifyContent:'center',alignItems:'center'}}><Text>推荐商家</Text></View>
                        <View style={{flexDirection:'row'}}>
                            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                <TouchableOpacity>
                                    <Image source={require('../imgs/home/img.png')} style={{width:105,height:105}}/>
                                    <View style={{marginTop:8,justifyContent:'center',alignItems:'center'}}>
                                        <Text>叶书 master</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                <TouchableOpacity>
                                    <Image source={require('../imgs/home/img.png')} style={{width:105,height:105}}/>
                                    <View style={{marginTop:8,justifyContent:'center',alignItems:'center'}}>
                                        <Text>微餐咖啡</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                <TouchableOpacity>
                                    <Image source={require('../imgs/home/img.png')} style={{width:105,height:105}}/>
                                    <View style={{marginTop:8,justifyContent:'center',alignItems:'center'}}>
                                        <Text>多伦多海鲜自助</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{flexDirection:'row',marginTop:10,paddingBottom:10}}>
                            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                <TouchableOpacity>
                                    <Image source={require('../imgs/home/img.png')} style={{width:105,height:105}}/>
                                    <View style={{marginTop:8,justifyContent:'center',alignItems:'center'}}>
                                        <Text>叶书 master</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                <TouchableOpacity>
                                    <Image source={require('../imgs/home/img.png')} style={{width:105,height:105}}/>
                                    <View style={{marginTop:8,justifyContent:'center',alignItems:'center'}}>
                                        <Text>微餐咖啡</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                <TouchableOpacity>
                                    <Image source={require('../imgs/home/img.png')} style={{width:105,height:105}}/>
                                    <View style={{marginTop:8,justifyContent:'center',alignItems:'center'}}>
                                        <Text>多伦多海鲜自助</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    center_item_wrap:{
        alignSelf:'center',
        alignItems:'center',
        flex:1,
        justifyContent:'flex-end'
    },
    center_item_tv:{
        fontSize:14,
        marginBottom:8,
        backgroundColor:'#00000000'
    }
});
export default Home;
