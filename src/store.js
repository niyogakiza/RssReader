import React, { Component}from 'react'
import { observable } from "mobx";
import { AsyncStorage } from 'react-native'

class Store extends Component {
    @observable feeds;
    @observable selectedFeed;
    @observable selectedEntry;

    constructor() {
        super();
        AsyncStorage.getItem('@feeds').then(sFeeds => {
            this.feeds = JSON.parse(sFeeds) || []
        });
    }

    persistFeeds() {
        AsyncStorage.setItem('@feeds', JSON.stringify(this.feeds))
    }

    addFeed(url, feed) {
        this.feeds.push({
            url,
            entry: feed.entry,
            title: feed.title,
            updated: feed.updated
        });
         this.persistFeeds();
    }

    removeFeed(url){
        this.feeds = this.feeds.filter(f => f.url !== url);
        this.persistFeeds();
    }

    selectFeed(feed){
        this.selectedFeed = feed
    }

    selectEntry(entry) {
        this.selectEntry = entry;
    }
}
export default Store
