import Title from "../Title/Title"
import Content from "../Content/Content"
import carImage from "../../assets/bmw320i.jpg"
export default function Container(){
  return(
    <div className="container">
      <Title
        title= "OII"
        subtitle= "olá,mundo"
      />
      <Content
        image={carImage}
      />
    </div>
  )
}