import React from "react";
import {useSelector, useDispatch} from "react-redux"
import { deleteBucket } from "./redux/modules/bucket";

const Detail = (props) => {
    const bucket_list = useSelector((state)=> state.bucket.list)
    console.log(props, bucket_list)
    const bucket_index = parseInt(props.match.params.index)
    const dispatch = useDispatch()

    return (
        <div className="Detail">
            <h1>{bucket_list[bucket_index]}</h1>

            <button onClick={()=>{
                dispatch(deleteBucket(bucket_index));
                props.history.goBack()
            }}>삭제하기</button>
            
        </div>
    )
}

export default Detail