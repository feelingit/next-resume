export default function(props) {

  if (!props.count || props.count === 0) {
    return null;
  }

  return <h1>{props.title}</h1>

}
