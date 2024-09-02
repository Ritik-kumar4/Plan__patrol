import api from "@/config/api";
import * as actionTypes from "./ActionTypes";

export const fetchIssues=(id)=>{
    return async(dispatch)=>{
        dispatch({type:actionTypes.FETCH_ISSUES_REQUEST});
        try {
            const response=await api.get(`/api/issues/project/${id}`);
            console.log("fetch issues",response.data);
            dispatch({
                type:actionTypes.FETCH_ISSUES_SUCCESS,
                issues:response.data
            })
        } catch (error) {
            dispatch({
                type:actionTypes.FETCH_ISSUES_FAILURE,
                error:error.message,
            })
        }
    }
}

export const deleteIssue=(id)=>{
    return async(dispatch)=>{
        dispatch({type:actionTypes.DELETE_ISSUES_REQUEST});
        try {
            const response=await api.delete(`/api/issues/${id}`);
            console.log("Delete issues",response.data);
            dispatch({
                type:actionTypes.DELETE_ISSUES_SUCCESS,
                issues:response.data
            })
        } catch (error) {
            dispatch({
                type:actionTypes.DELETE_ISSUES_FAILURE,
                error:error.message,
            })
        }
    }
}

export const fetchIssueById=(id)=>{
    return async(dispatch)=>{
        dispatch({type:actionTypes.FETCH_ISSUES_BY_ID_REQUEST});
        try {
            const response=await api.get(`/api/issues/${id}`);
            console.log("fetch issue by id ",response.data);
            dispatch({
                type:actionTypes.FETCH_ISSUES_BY_ID_SUCCESS,
                issues:response.data
            })
        } catch (error) {
            dispatch({
                type:actionTypes.FETCH_ISSUES_BY_ID_FAILURE,
                error:error.message,
            })
        }
    }
}

export const updateIssueStatus=(issueId,status)=>{
    return async(dispatch)=>{
        dispatch({type:actionTypes.UPDATE_ISSUE_STATUS_REQUEST});
        try {
            const response=await api.put(`/api/issues/${issueId}/status/${status}`);
            console.log("update issues status",response.data);
            dispatch({
                type:actionTypes.UPDATE_ISSUE_STATUS_SUCCESS,
                issues:response.data
            })
        } catch (error) {
            dispatch({
                type:actionTypes.UPDATE_ISSUE_STATUS_FAILURE,
                error:error.message,
            })
        }
    }
}
export const assignedUserToIssue=(issueId,userId)=>{
    return async(dispatch)=>{
        dispatch({type:actionTypes.ASSIGNED_ISSUE_TO_USER_REQUEST});
        try {
            const response=await api.put(`/api/issues/${issueId}/assignee/${userId}`);
            console.log("assigned issues ->",response.data);
            dispatch({
                type:actionTypes.ASSIGNED_ISSUE_TO_USER_SUCCESS,
                issues:response.data
            })
        } catch (error) {
            dispatch({
                type:actionTypes.ASSIGNED_ISSUE_TO_USER_FAILURE,
                error:error.message,
            })
        }
    }
}

export const createIssue=(issueData)=>{
    return async(dispatch) =>{
        dispatch({type:actionTypes.CREATE_ISSUES_REQUEST});
        try{
            const response=await api.post("/api/issues",issueData);
            dispatch({
                type:actionTypes.CREATE_ISSUES_SUCCESS,
                issue:response.data
            });
        }catch(error){
            dispatch({
                type:actionTypes.CREATE_ISSUES_FAILURE,
                error:error.message
            });
        }
    };
}