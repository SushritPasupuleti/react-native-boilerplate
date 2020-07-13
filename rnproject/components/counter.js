import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    Alert,
} from 'react-native';
import {
    setCount
} from './../actions/APIActions'

const Counter = (props) => {
    return (
        <View>
            <Text>{"Counter Value " + props.api.count}</Text>
            <Button
                title="Press me"
                color="#f194ff"
                onPress={() => { 
                    props.setCount(props.api.count + 1);
                    Alert.alert('Incrementred Value to ' + String(Number(props.api.count + 1)));
            }}
            />
        </View>
    )
}

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
