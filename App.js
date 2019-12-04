import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import {View} from 'react-native'
export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
          isReady: false,
        };
    }


    async componentDidMount() {
        await Font.loadAsync({ ///native-base/Fonts/Roboto.ttf
          Roboto: require('./node_modules/native-base/Fonts/Roboto.ttf'),
          Roboto_medium: require('./node_modules/native-base/Fonts/Roboto_medium.ttf'),
                                //native-base/Fonts/Roboto_medium.ttf
        
        });
        this.setState({ isReady: true });
    }


    render() {

        if (!this.state.isReady) {
            return  <View></View>;
        }

        return (
          <Container>
            <Header style={{ height:80}}>
              <Left>
                <Button transparent style={{ marginTop:15}}>
                  <Icon name='menu' />
                </Button>
              </Left>
              <Body>
                <Title style={{ marginTop:15}}>Header</Title>
              </Body>
              <Right />
            </Header>
            <Content>
              <Text>
                This is Content Section
              </Text>
            </Content>
            <Footer>
              <FooterTab>
                <Button full>
                  <Text>Footer</Text>
                </Button>
              </FooterTab>
            </Footer>
          </Container>
        );
    }
}