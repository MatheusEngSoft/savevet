import '../assets/style/Button.css'

export default function Button(props){
  return(
    <div>
      <a href="#"><button type="button" className="custom-button">{props.text}</button></a>
    </div>
  )
}