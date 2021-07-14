import {SET_WINDOW,TOGGLE_MENU,OPEN_MENU,REMOVE_CLASS_FROM_CURSOR,ADD_CLASS_TO_CURSOR,SHOW_FULL_SCREEN_VIDEO,HIDE_FULL_SCREEN_VIDEO,SET_MENU_BTN_COLOR} from './actions'
import { combineReducers } from 'redux';
function commonReducer(state={menu_btn_color:"black",show_fullscreen_video:false,video_id:null,video_src:null,video_type:null,windowWidth:0,windowHeight:0,menuOpen:false,cursorClasses:[]},action){
	switch(action.type){
		case SET_MENU_BTN_COLOR:
			return Object.assign({},state,{menu_btn_color:action.color})
		case SHOW_FULL_SCREEN_VIDEO:
			return Object.assign({},state,{show_fullscreen_video:true,video_id:action.video_id,video_src:action.video_src,video_type:action.video_type})
		case HIDE_FULL_SCREEN_VIDEO:
			return Object.assign({},state,{show_fullscreen_video:false,video_id:null,video_src:null,video_type:null})
		case ADD_CLASS_TO_CURSOR:
			var cursorClasses = JSON.parse(JSON.stringify(state.cursorClasses))
			if(!cursorClasses.includes(action.cls))
				cursorClasses.push(action.cls)
			return Object.assign({},state,{cursorClasses})
		case REMOVE_CLASS_FROM_CURSOR:
			var cursorClasses = JSON.parse(JSON.stringify(state.cursorClasses))
			var i = cursorClasses.findIndex(cls=>cls==action.cls)
			if(i > -1)
				cursorClasses.splice(i,1)
			return Object.assign({},state,{cursorClasses})
		case OPEN_MENU:
			return Object.assign({},state,{menuOpen:action.bool})
		case TOGGLE_MENU:
			return Object.assign({},state,{menuOpen:!state.menuOpen})
		case SET_WINDOW:
			return Object.assign({},state,{windowWidth:action.windowWidth,windowHeight:action.windowHeight})
		default:
			return state;
	}
}
const combinedReducer = combineReducers({
	common:commonReducer,
});
export default combinedReducer;
