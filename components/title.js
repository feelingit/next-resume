export default function(props) {
  if (props.count > 0)
    return <h1>{props.title}</h1>
  else
    return null
}
