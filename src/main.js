import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'

import FeedList from './screens/FeedsList'
import FeedDetail from './screens/FeedDetail'
import EntryDetail from './screens/EntryDetail'
import AddFeed from './screens/AddFeed'

import store from './store'

const Navigator = StackNavigator({
    FeedList: { screen: FeedList },
    FeedDetail: { screen: FeedDetail },
    EntryDetail: { screen: EntryDetail },
    AddFeed: { screen: AddFeed }
});

export default class App extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return <Navigator screenProps={{ store }} />
    }
}
