import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import { initStateType, loadingAC } from './bll/loadingReducer';

function HW10() {
    // useSelector, useDispatch
    // const loading = useSelector<initStateType>(state => state.loading)
    // const dispatch = useDispatch()

 const loading = false

    const setLoading = () => {
        // dispatch(loadingAC)
        // setTimeout(2000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div>крутилка...</div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
