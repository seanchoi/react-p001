// bucket.js

// Actions 전부 대문자로 만들자!
const LOAD = "bucket/LOAD";
const CREATE = "bucket/CREATE";
const DELETE = "bucket/DELETE"

const initialState = {
    list: ["영화 보기","친구 만나기","운동하기"],
}

// ActionCreators
export const loadBucket = (bucket) => {
    return {type: LOAD, bucket}
}

export const createBucket = (bucket) => {
    return {type: CREATE, bucket}
}

export const deleteBucket = (bucket_index) => {
    return {type: DELETE, bucket_index}
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "bucket/LOAD": {
        return state;
    } 
    case "bucket/CREATE": {
        const new_bucket_list = [...state.list, action.bucket];
        return {list: new_bucket_list}        
    }
    case "bucket/DELETE": {
        const bucket_list = state.list.filter((item, idx) => {
            if(idx !== action.bucket_index) {
                return item
            }
        })
        return {list:bucket_list}
    }
    // do reducer stuff
    default: return state;
  }
}


