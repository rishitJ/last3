function startclassifier()
{
    navigator.mediaDevices.getUserMedia({audio: true})
    classifier = ml5.soundClassifier ('https://teachablemachine.withgoogle.com/models/NzK3AaJxE/model.json', modelready)
}
function modelready()
{
    classifier.classify(gotResults)
}
function gotResults(error, results)
{
    if (error) 
    {
     console.log(error)
    } 
    else 
    }
        console.log(results)
        label = results[0].label
        r = Math.floor(Math.random()* 255)+1
        g = Math.floor(Math.random()* 255)+1
        b = Math.floor(Math.random()* 255)+1
        img1 = document.getElementById("alien1")
        img2 = document.getElementById("alien2")
        img3 = document.getElementById("alien3")
        img4 = document.getElementById("alien4")
        if (condition) 
        {
            
        } 
        else 
        {
            
        }
    {    
}