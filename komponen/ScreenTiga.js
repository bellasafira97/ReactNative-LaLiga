import React, {Component} from 'react';
import {View, Image, Alert} from 'react-native';
import {Container, Button, Header, Content, Thumbnail,
    Body, Text, Icon, List,Left, CardItem, Card} from 'native-base';
import axios from 'axios';
class ScreenTiga extends Component {
    static navigationOptions =({navigation}) => {
      return{
        title: navigation.getParam('nama_pemain'),
        headerStyle:{
          backgroundColor: 'purple',
        },
        headerTintColor:'white',
      }}
      constructor(props){
        super(props)
        this.state ={
            players: [],
            nama_pemain: this.props.navigation.getParam("nama_pemain")
        }
    }

      componentDidMount(){
        var url = `https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=${this.state.nama_pemain}`;
        axios.get(url)
        .then((x) => {
            this.setState({
                players: x.data.player,
            })
        })
        .catch((x)=> {Alert.alert('Error')})
    }
    render(){
        var profilePlayer = this.state.players.map((val,i)=>{
            var nama_pemain = val.strPlayer;
            var negara_pemain = val.strNationality;
            var foto_pemain = val.strThumb;
            var deskripsi = val.strDescriptionEN;

            return(
              <Card key={i} style={{padding:15}}>
                <CardItem>
                  <Left>
                    <Thumbnail source={foto_pemain ? {uri:foto_pemain} : require('../Image/1.jpg')} />
                    <Body>
                      <Text>{nama_pemain}</Text>
                      <Text note>{negara_pemain}</Text>
                    </Body>
                  </Left>
                  
                </CardItem>
    
                <CardItem cardBody>
                  <Image source={foto_pemain ? {uri:foto_pemain} : require('../Image/1.jpg')} style={{height: 250, width: null, flex: 1}}/>
                </CardItem>
                
                <CardItem>
                  <Body>
                    <Text>{deskripsi}</Text>
                  </Body>
                </CardItem>
              </Card>
    
    
          )
        })
        return(
          <Container>
            <Content style={{marginTop: 10}}>
            <List>
                {profilePlayer}
            </List>
            </Content>
          </Container>
        )
      }
    }

  export default ScreenTiga;