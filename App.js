

import React from 'react';
import {
  View,
  Platform,
  Image,
  Button
} from 'react-native';

import CameraRoll from "@react-native-community/cameraroll";

import WallPaperManager from 'react-native-wallpaper-manager';

const App = () => {
  const img_url 
  = "https://www.elsetge.cat/myimg/f/182-1822715_snowy-wallpaper-illustrations-for-iphone-background-pictures-for.jpg"
  
  const _setWallpaperAndroidOnly = () =>{
    WallPaperManager
    .setWallpaper({uri: img_url}, 
      (res)=> console.log(res) 
      //here you could display a success message to the user
      // something like : "Wallpaper changed Successfully"
      );
  
  }
  const AndroidButton = () => (
              <Button 
              title="set as wallPaper" 
              onPress={_setWallpaperAndroidOnly}
              />
  )
  
  const _saveImage =() => {
    CameraRoll.saveToCameraRoll(img_url).then(local_img_url => {
      console.log("success",local_img_url ) 
      /* here you display a message for the user 
      something like "Image saved successfully" */
    })
  }
  const IosButton = () => (
              <Button 
              title="Save Image in camera roll" 
              onPress={_saveImage}
              />
              )
  return (
    <>
      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <Image style={{margin:20,width:100,height:150}} source={{uri:img_url}} />
       {Platform.OS == "android"?
        <AndroidButton />
        :
        <IosButton />
        }
      </View>
    </>
  );
};

export default App;
