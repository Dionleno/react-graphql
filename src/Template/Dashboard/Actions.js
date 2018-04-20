import React, { Component } from 'react'
import axios from 'axios'

export const changeItemUser = (_value,_obj) => ({
	type: 'CHANGE_FIELD_USER',
	payload: _value,
	objectItem: _obj
})

export const saveUser = () =>{
    return (dispatch, getState) => { 
        const c = getState().users
        alert(JSON.stringify(c))
     }
} 