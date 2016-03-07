import {List} from 'immutable';
import {Map} from 'immutable';
import * as BusinessAction from './BusinessAction';
import businessesReducer from '../business/BusinessesReducer';
import {BusinessModel} from "./BusinessModel";
import {BusinessUser} from "./BusinessUser";

export function business(state:Map<string,any> = Map<string,any>(), action:any):Map<string,any> {

    function indexOfName(businessId, name):any {
        return businessUsers.findIndex((i:BusinessUser) => {
            return i.getBusinessId() === businessId && i.getKey('name') == name;
        });
    }

    switch (action.type) {
        case BusinessAction.REQUEST_BUSINESSES:
            return state;

        case BusinessAction.RECEIVE_BUSINESSES:
            var businesses:List<BusinessModel> = state.getIn(['businesses'])
            var list:List<BusinessModel> = businessesReducer(businesses, action);
            return state.setIn(['businesses'], list);

        case BusinessAction.RECEIVE_BUSINESS_USER:
            return state.setIn(['businessUsers'], action.businessUsers);

        case BusinessAction.RECEIVE_BUSINESSES_STATS:
            return state.setIn(['businessStats'], action.stats);

        case BusinessAction.SET_BUSINESS_DATA:
            var businesses:List<BusinessModel> = state.getIn(['businesses'])
            var list:List<BusinessModel> = businessesReducer(businesses, action);
            return state.setIn(['businesses'], list);

        case BusinessAction.CHANGE_BUSINESS_USER_NAME:
        {
            var businessUsers:List<BusinessUser> = state.getIn(['businessUsers'])
            // new name is already taken or user ended up not modifying original name, ignore
            if (indexOfName(action.businessId, action.value.newValue) != -1)
                return state;
            businessUsers = businessUsers.update(indexOfName(action.businessId, action.value.oldValue), (business:BusinessUser) => {
                return business.setKey<BusinessUser>(BusinessUser, action.key, action.value.newValue)
            });
            return state.setIn(['businessUsers'], businessUsers);
        }

        case BusinessAction.SET_BUSINESS_USER_FIELD:
        {
            var businessUsers:List<BusinessUser> = state.getIn(['businessUsers'])
            businessUsers = businessUsers.update(indexOfName(action.businessId, action.name), (business:BusinessUser) => {
                return business.setKey<BusinessUser>(BusinessUser, action.key, action.value)
            });
            return state.setIn(['businessUsers'], businessUsers);
        }
            
        //case 'REMOVE':
        //    return List<BusinessModel>(state.filter((i: BusinessModel) => i.uuid !== action.itemId));
        default:
            return state;
    }
}