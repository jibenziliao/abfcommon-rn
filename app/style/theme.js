'use strict';
var React = require("react-native");
var {
    StyleSheet
} = React;

module.exports = StyleSheet.create({
    appbody: {
        backgroundColor: '#f5f5f5',
        flex: 1
    },
    bar: {
        height: 48,
        backgroundColor: '#8192D6',
        flexDirection: 'row'
    },
    barleft:{
        justifyContent:'flex-start',
        alignItems:'center',
        flex:1,
        marginLeft: 6,
        flexDirection:'row',
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 8,
        paddingRight: 8
    },
    barcenter:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
    },
    barright:{
        justifyContent:'flex-end',
        alignItems:'center',
        flex:1,
        marginRight: 6,
        flexDirection: 'row',
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 8,
        paddingRight: 8
    },
    bartitle:{
        color:'white',
        fontSize:18,
    },
    tabnav:{
        color:'#999',
    },
    tabnavselectedStyle:{
        color:'#8192D6',
    }
});
