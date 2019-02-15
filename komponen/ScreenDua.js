import React, {Component} from 'react';
import {View, Image, Alert} from 'react-native';
import {Container, Button, Header, Content, Footer, Thumbnail,
    Body, Text, Icon, Input, Item, List, ListItem, Left, Right} from 'native-base';
import axios from 'axios';
class ScreenDua extends Component {
  static navigationOptions =({navigation}) => {
    return{
        title: navigation.getParam('nama_team'),
        headerStyle:{
          backgroundColor: 'purple',
        },
        headerTintColor:'white',
      }}
      constructor(props){
          super(props)
          this.state ={
              players: [],
              nama_team: this.props.navigation.getParam("nama_team")
          }
      }

      componentDidMount(){
        var link = `https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=${this.state.nama_team}`;
        axios.get(link)
        .then((x) => {
            console.log(x)
            this.setState({
                players: x.data.player,
            })
        })
        .catch((x)=> {Alert.alert('Error')})
    }
    render(){
        var playersLaliga = this.state.players.map((val,i)=>{
            var nama_pemain = val.strPlayer;
            var posisi_pemain = val.strPosition;
            var foto_pemain = val.strThumb;

            return(
                <ListItem key={i} avatar onPress={() => {
                    this.props.navigation.navigate("HalTiga", {
                        nama_pemain: nama_pemain,
                        foto_pemain: foto_pemain
                    })
                }}>
                <Left>
                  <Thumbnail source={{uri:foto_pemain}}/>
                </Left>
                  <Body >
                    <Text>{nama_pemain}</Text>
                    <Text note>{posisi_pemain}</Text>
                  </Body>
                </ListItem>
              )
        })
      return(
        <Container > 
        <Content> 
          <List>{playersLaliga}</List>
        </Content>
        <Footer>

        </Footer>
      </Container>
      )
    }
  }

  export default ScreenDua;