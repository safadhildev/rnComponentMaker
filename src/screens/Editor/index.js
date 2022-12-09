import React, {useEffect, useState} from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {BackgroundView, colors, themes} from '../../components';
import Header from '../../components/Header';
import styles from './index.js';

const options = [
  {id: 'backgroundColor', name: 'Background Color'},
  {id: 'text', name: 'Text'},
  {id: 'activeOpacity', name: 'Background Color'},
  {id: 'activeOpacity', name: 'Background Color'},
  {id: 'direction', name: 'row'},
];

const defaultButtonProps = {
  style: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
};

const defaultButtonTextProps = {
  style: () => ({
    color: '#FFF',
  }),
};

const Editor = () => {
  const [buttonProps, setButtonProps] = useState(defaultButtonProps);
  const [buttonStyles, setButtonStyles] = useState(defaultButtonProps.style);

  useEffect(() => {
    setButtonStyles(defaultButtonProps.style);
  }, []);

  return (
    <BackgroundView
      // bgColor={themes.oneDarkPro.bg}
      bgColor="#000000"
      customContainerStyle={{flex: 1}}>
      <View style={styles.container}>
        <Header />
        <View style={styles.previewContainer}>
          <TouchableOpacity {...buttonProps} style={buttonStyles}>
            <Text>Hello World</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.optionsContainer}>
          <View style={styles.optionsWrapper}></View>
        </View>
      </View>
    </BackgroundView>
  );
};

export default Editor;
