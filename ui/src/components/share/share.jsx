import { Send } from "react-bootstrap-icons";
import { RWebShare } from "react-web-share";
const Share = ({text,url,title}) => {
    return (  
        <RWebShare
        data={{
          text: text,
          url: url,
          title: title,
        }}
      >
                          <button className="item-share"><Send/></button>
    </RWebShare>
    );
}
 
export default Share;