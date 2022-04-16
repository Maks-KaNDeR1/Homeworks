import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import homeworks from '../h1/homeworks';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import { loadingAC } from './bll/loadingReducer';
import { AppStoreType } from './bll/store';
import Preloader from './Preloader';

function HW10() {
    // useSelector, useDispatch
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.loading)
    const dispatch = useDispatch()


    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 4000)
    };

    return (
        <div  style={{ height: '140px'}}>
            <hr />
            {homeworks(10)}
            {/*should work (должно работать)*/}
            <div >
                {loading ? <Preloader />
                    : (
                        <div>
                            <SuperButton onClick={setLoading}>set loading...</SuperButton>
                        </div>
                    )
                }
            </div>

            {/* <hr  /> */}
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            {/* <hr /> */}
        </div>
    )
}

export default HW10
