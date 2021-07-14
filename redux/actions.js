export const SET_WINDOW = "SET_WINDOW"
export const TOGGLE_MENU = "TOGGLE_MENU"
export const OPEN_MENU = "OPEN_MENU"
export const ADD_CLASS_TO_CURSOR = "ADD_CLASS_TO_CURSOR"
export const REMOVE_CLASS_FROM_CURSOR = "REMOVE_CLASS_FROM_CURSOR"
export const HIDE_FULL_SCREEN_VIDEO = "HIDE_FULL_SCREEN_VIDEO"
export const SHOW_FULL_SCREEN_VIDEO = "SHOW_FULL_SCREEN_VIDEO"
export const SET_MENU_BTN_COLOR = "SET_MENU_BTN_COLOR"
export function showFullscreenVideo(video_id, video_src,video_type){
    return {
        type:SHOW_FULL_SCREEN_VIDEO,
        video_id,
        video_src,
        video_type
    }
}
export function hideFullscreenVideo(){
    return {
        type:HIDE_FULL_SCREEN_VIDEO
    }
}
export function setWindow(windowWidth,windowHeight){
    return {
        type:SET_WINDOW,
        windowWidth,
        windowHeight
    }
}
export function toggleMenu(){
    return {
        type:TOGGLE_MENU
    }
}
export function openMenu(bool){
    return {
        type:OPEN_MENU,
        bool
    }
}
export function addClassToCursor(cls){
    return {
        type:ADD_CLASS_TO_CURSOR,
        cls
    }
}
export function setMenuBtnColor(color){
    return {
        type:SET_MENU_BTN_COLOR,
        color
    }
}
export function removeClassFromCursor(cls){
    return {
        type:REMOVE_CLASS_FROM_CURSOR,
        cls
    }
}