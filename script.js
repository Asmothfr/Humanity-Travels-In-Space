window.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM entièrement chargé et analysé")
    // Vitesse déplacement Galaxy : 630km/s
    // Vitesse déplacement soleil : 850 000km/h
    // Vitesse déplacement terre : 100 000 km/h
    // Vitesse rotation de la terre : 1600 km/h

    // distance traveled in second.
    const galaxyKmS= 630
    const sunKms= 236
    const earthOrbitalKms= 29.8
    const earthRotationKms= 0.4
    let seconds = 0
    let minutes = 0
    let hours = 0
    // Actual traveled distance
    let TraveledGalaxyDist = 0
    let TraveledSunDist = 0
    let TraveledOrbitalEarth = 0
    let TraveledRotationEarth = 0
    let fullDistance = 0;
    // State of program
    let launched = false
    //Dom content selection
    /**
     * Display Selection
     */
    let time = document.querySelector('.time')
    let rotation = document.querySelector('.rotation')
    let orbite = document.querySelector('.orbite')
    let sun = document.querySelector('.sun')
    let galaxy = document.querySelector('.galaxy')
    let displayFullDistance = document.querySelector('.full-distance')
    /**
     * Button Selection
     */
    const oneClick = document.querySelector(".oneClick")
    const startBtn = document.querySelector(".startCount")
    const stopBtn = document.querySelector(".stopCount")
    const resetBtn = document.querySelector(".resetCount")
    let displayDistanceTime

    function PassTime()
    {
        seconds++
        if(seconds==60)
        {
            seconds = 0
            minutes++
        }   
        if(minutes==60)
        {
            minutes=0
            hours++
        }
        time.innerHTML = `${hours} heures ${minutes} minutes ${seconds} secondes se sont écoulées depuis votre clic`
    }
    function DistanceTraveledGalaxy()
    {
        TraveledGalaxyDist += galaxyKmS
        galaxy.innerHTML = `La galaxy a parcouru ${TraveledGalaxyDist} km depuis votre clic`
        return TraveledGalaxyDist
    }
    function DistanceTraveledSun()
    {
        TraveledSunDist += sunKms
        sun.innerHTML = `Le soleil a parcouru ${TraveledSunDist} km depuis votre clic`
        return TraveledSunDist
    }
    function DistanceTraveledOrbital()
    {
        TraveledOrbitalEarth += earthOrbitalKms
        orbite.innerHTML = `La terre a parcouru ${TraveledOrbitalEarth.toFixed(2)} km depuis votre clic`
        return TraveledOrbitalEarth
    }
    function DistanceTraveledRotation()
    {
        TraveledRotationEarth += earthRotationKms
        rotation.innerHTML = `La terre a tourné de ${TraveledRotationEarth.toFixed(2)} km depuis votre clic`
        return TraveledRotationEarth
    }
    function TotalDistanceTraveled()
    {
        fullDistance = TraveledGalaxyDist + TraveledSunDist + TraveledOrbitalEarth + TraveledRotationEarth
        displayFullDistance.innerHTML = `Vous avez parcouru au total ${fullDistance.toFixed(2)} km depuis votre clic`;
    }
    function display()
    {
        DistanceTraveledRotation()
        DistanceTraveledOrbital()
        DistanceTraveledSun()
        DistanceTraveledGalaxy()
        TotalDistanceTraveled()
        PassTime()
    }

    startBtn.addEventListener("click", ()=>{
        if(!launched)
        {
            launched = true
            displayDistanceTime = setInterval(display, 1000)
        }
    });
    stopBtn.addEventListener("click", ()=>{
        clearInterval(displayDistanceTime)
        launched = false
    });
    resetBtn.addEventListener("click", ()=>{
        TraveledGalaxyDist = 0
        TraveledSunDist = 0
        TraveledOrbitalEarth = 0
        TraveledRotationEarth = 0
        fullDistance = 0;
        seconds = 0
        minutes = 0
        hours = 0
        time.innerHTML = '...'
        galaxy.innerHTML = '...'
        sun.innerHTML = '...'
        orbite.innerHTML = '...'
        rotation.innerHTML = '...'
        displayFullDistance.innerHTML = '...'
    });
});