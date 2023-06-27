import Video from "./Video";

export default function VideoList(props) {
    return props.list.map(item => <Video url={item.url} date={item.date} />);
}