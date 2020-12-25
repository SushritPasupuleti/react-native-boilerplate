import React, { Component, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Alert,
} from 'react-native';
import { Button } from 'react-native-paper';

import {
    setCount
} from './../actions/APIActions'

const Counter = (props) => {

    const [isLoading, setisLoading] = useState(false)

    return (
        <View>
            <Text
                style={styles.count}
            >{"Counter Value " + props.api.count}</Text>
            <Button
                style={styles.counter}
                mode="contained"
                loading={isLoading}
                onPress={() => {
                    setisLoading(true);
                    //setTimeout(1000)
                    props.setCount(props.api.count + 1)
                    //setisLoading(false);
                    Alert.alert('Incrementred Value to ' + String(Number(props.api.count + 1)), 'You may now close this', [
                        {
                            text: 'Ok',
                            onPress: () => setisLoading(false)
                        },
                    ],
                        { cancelable: false });
                }}
            >Increment</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    counter: {
        margin: 20,
        borderRadius: 125,
    },
    count: {
        margin: 10
    }
});

Counter.propTypes = {
    api: PropTypes.object.isRequired,
    setCount: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    api: state.api,
})

export default connect(mapStateToProps, {
    setCount,
})(Counter)
