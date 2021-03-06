import {getTheme} from '../util/mwc-util'
import setupJss from '../styles/setup-jss'
import deepmerge from 'deepmerge'
import createTheme from '../styles/create-theme'

const theme = createTheme(getTheme())

class CardMediaStyle{
   defaultStyle: object = {
    root: {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    rootMedia: {
        width: '100%',
    },
   }
  jss:any;
  setup(style:object){
    const mergedStyles = deepmerge.all([this.defaultStyle,style])
    this.jss = new setupJss()
    this.jss.attachStyleSheet(mergedStyles)
  }
  getClassName(type:Array<string>):string{
    return this.jss.getClassName(type)
  }

}

export default CardMediaStyle;