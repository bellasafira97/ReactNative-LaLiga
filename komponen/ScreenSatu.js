import React, {Component} from 'react';
import {View, Image, Alert} from 'react-native';
import {Container, Button, Header, Content, Footer, Thumbnail,
    Body, Text, Icon, Input, Item, List, ListItem, Left, Right} from 'native-base';
import axios from 'axios';
class ScreenSatu extends Component {
    static navigationOptions = {
        title:'La Liga Teams',
        headerStyle:{
          backgroundColor: 'purple',
        },
        headerTintColor:'white',
      }
      constructor(){
          super()
          this.state ={
              clubs: [],
          }
      }

      componentDidMount(){
        var url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain';
        axios.get(url)
        .then((x) => {
            // console.log(x.data.teams)
            this.setState({
                clubs: x.data.teams,
            })
        })
        .catch((x)=> {Alert.alert('Error')})
    }
    render(){
        var clubsLaliga = this.state.clubs.map((val,i)=>{
            var nama_team = val.strTeam;
            var alamat_web = val.strWebsite;
            var logo_team = val.strTeamBadge;

            return(
                <ListItem key={i} avatar onPress={() => {
                    this.props.navigation.navigate("HalDua", {
                        nama_team: nama_team,
                        logo_team: logo_team
                    })
                }}>
                <Left>
                  <Thumbnail source={{uri:logo_team}}/>
                </Left>
                  <Body >
                    <Text>{nama_team}</Text>
                    <Text note>{alamat_web}</Text>
                  </Body>
                </ListItem>
              )
        })
      return(
        <Container > 
        <Content> 
          <List>{clubsLaliga}</List>
        </Content>
        <Footer>

        </Footer>
      </Container>
      )
    }
  }

  export default ScreenSatu;