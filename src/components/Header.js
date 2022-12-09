import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ArrowLeft} from 'iconoir-react-native';
import themes from './themes';

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8} style={styles.backButton}>
        <ArrowLeft
          color={themes.oneDarkPro.primary}
          width={24}
          height={24}
          strokeWidth={3}
        />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <View style={styles.titleWrapper}>
          <Text
            style={styles.title}
            allowFontScaling={false}
            ellipsizeMode="head"
            numberOfLines={1}>
            Hello
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'transparent',
    // position: 'absolute',
    marginVertical: 10,
    paddingHorizontal: 10,
    minHeight: 40,
    zIndex: 999,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  backButton: {
    backgroundColor: themes.oneDarkPro.bg,
    padding: 5,
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
    flexWrap: 'wrap',
    height: 40,
    paddingHorizontal: 10,
  },
  titleWrapper: {
    flex: 1,
    flexDirection: 'row',
    minWidth: '0%',
    maxWidth: '100%',
    paddingHorizontal: 15,
    backgroundColor: themes.oneDarkPro.bg,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    color: themes.oneDarkPro.primary,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Header;
