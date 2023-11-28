 

const Hero = () => {


    let marks = 90;
    return (
        <div>
            <p style={{color:"red"}}>Result Sheet</p>
{marks>80?

<h5>Excelent A+</h5>
:
<h5>average</h5>

}


        </div>
    );
};

export default Hero;