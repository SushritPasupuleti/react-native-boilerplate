import React, { Component, useState } from 'react'
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
            <Text>{"Counter Value " + props.api.count}</Text>
            <Button
                style={styles.counter}
                mode="contained"
                loading={isLoading}
                onPress={() => {
                    props.setCount(props.api.count + 1);
                    Alert.alert('Incrementred Value to ' + String(Number(props.api.count + 1)));
                }}
            >Press me</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    counter: {
        margin: 20,
        borderRadius: 125,
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
