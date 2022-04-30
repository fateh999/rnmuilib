# rnmui

[![npm version](https://img.shields.io/npm/v/rnmui.svg?style=for-the-badge)](https://www.npmjs.com/package/rnmui)
[![npm downloads](https://img.shields.io/npm/dm/rnmui.svg?style=for-the-badge)](https://www.npmjs.com/package/rnmui)
[![npm](https://img.shields.io/npm/dt/rnmui.svg?style=for-the-badge)](https://www.npmjs.com/package/rnmui)
[![npm](https://img.shields.io/npm/l/rnmui?style=for-the-badge)](https://github.com/fateh999/rnmui/blob/master/LICENSE)

React Native Minimalistic UI Library with barebones components to easily create any UI you want

#### Documentation :

- [https://fateh999.github.io/rnmui](https://fateh999.github.io/rnmui)

#### Demo :

![](iOS.png)
![](Android.png)

#### Steps to install :

```javascript

npm install rnmui

```

or

```javascript

yarn add rnmui

```

```javascript
import { Block, Typography, Picture } from "rnmui";
```

#### Usage :

```javascript
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Block, Typography, Picture, Container } from "rnmui";

function App() {
  return (
    <Container backgroundColor={"#f2f2f2"}>
      <Block backgroundColor={"white"} elevation={5}>
        <Typography
          fontSize={22}
          color={"black"}
          fontWeight={"bold"}
          textAlign={"center"}
          marginVertical={20}
        >
          Kitchen Sink
        </Typography>
      </Block>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <Block marginHorizontal={20}>
          <Typography
            fontSize={16}
            color={"black"}
            fontWeight={"bold"}
            marginVertical={20}
          >
            1. Block
          </Typography>
          <Block
            backgroundColor={"orange"}
            height={100}
            width={100}
            elevation={10}
          />
        </Block>

        <Block marginHorizontal={20}>
          <Typography
            fontSize={16}
            color={"black"}
            fontWeight={"bold"}
            marginVertical={20}
          >
            2. Typography
          </Typography>
          <Typography fontSize={48} fontWeight={"bold"} color={"red"}>
            RNMUI
          </Typography>
        </Block>

        <Block marginHorizontal={20}>
          <Typography
            fontSize={16}
            color={"black"}
            fontWeight={"bold"}
            marginVertical={20}
          >
            3. Picture
          </Typography>
          <Picture
            height={100}
            width={100}
            source={{
              uri: "https://images.pexels.com/photos/305821/pexels-photo-305821.jpeg?cs=srgb&dl=pexels-scott-webb-305821.jpg&fm=jpg",
            }}
          />
        </Block>
      </ScrollView>
    </Container>
  );
}

export default App;

const styles = StyleSheet.create({
  scrollView: { flexGrow: 1 },
});
```

<p><a href="https://www.buymeacoffee.com/fateh999"> <img align="left" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="50" width="210" alt="fateh999" /></a></p><br><br><br>