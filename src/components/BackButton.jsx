function BackButton() {
    const navigate = useNavigate(); 

    return (
        <div>
          <Button 
            type="back" 
            onClick={(e) =>
            {e.preventDefault();
            navigate(-1);
            }}
            >
            Back
            </Button>   
        </div>
    )
}

export default BackButton
