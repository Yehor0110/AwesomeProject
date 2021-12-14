import React from 'react';
import { Button, View, Text } from 'react-native';
import { albumsScreenStyle } from './styles';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

export default function AlbumsScreen({ navigation, route }) {
    React.useEffect(() => {
        if (route.params?.post) {
          // Post updated, do something with `route.params.post`
          // For example, send the post to the server
        }
      }, [route.params?.post]);

    return (
        <View style={albumsScreenStyle.wrap}>
            <Text style={albumsScreenStyle.text}>This is MAIN Screen</Text>
            <Button
                style={albumsScreenStyle.button}
                title="Go to Details"
                onPress={() => navigation.navigate('Contacts')}
            />

            <Button
                title="Create post"
                onPress={() => navigation.navigate('CreatePost')}
            />
            <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
        </View>
    );
}

function CreatePostScreen({ navigation, route }) {
    const [postText, setPostText] = React.useState('');
  
    return (
      <>
        <TextInput
          multiline
          placeholder="What's on your mind?"
          style={{ height: 200, padding: 10, backgroundColor: 'white' }}
          value={postText}
          onChangeText={setPostText}
        />
        <Button
          title="Done"
          onPress={() => {
            // Pass and merge params back to home screen
            navigation.navigate({
              name: 'Chat',
              params: { post: postText },
              merge: true,
            });
          }}
        />
      </>
    );
  }
