import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css'; 
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1588929434848-f30c0b123922?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    const HOT_URL ="https://media.istockphoto.com/id/2163514261/photo/boy-drinking-water-from-a-bottle-on-a-sunny-hot-day.webp?a=1&b=1&s=612x612&w=0&k=20&c=ADC9cFwz86iJURgop2ZiYNJJ_0JZLkRr6Hp99P95DGc=";
    const COLD_URL ="https://plus.unsplash.com/premium_photo-1700996706577-c299866f294e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29sZCUyMHdlYXRoZXIlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D";
    const RAINY_URL ="https://images.unsplash.com/photo-1462040700793-fcd2dbc0edf0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";


  return (
    <div className="InfoBox">
      <h1>Weather Info - {info.weather}</h1>

      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={info.humidity > 70 ? RAINY_URL : info.temp > 20 ? HOT_URL : info.temp < 20 ? COLD_URL : INIT_URL}
          title="Weather Image"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {info.city} {
              info.humidity > 70 ? <ThunderstormIcon/> : info.temp > 20 ? <SunnyIcon/> : <SevereColdIcon/>
            }
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Temperature: {info.temp}°C
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Feels like: {info.feelslike}°C  
            <br /> Min: {info.tempMin}°C | Max: {info.tempMax}°C  
            <br /> Humidity: {info.humidity}%
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
