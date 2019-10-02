var dataPoints = []

for( i = 0; i < 30; i++ )
{
    var dataPoint = new DataPoint ();

    dataPoint.target = (i % 3) - 1;

    dataPoints.push( dataPoint );
}

for( i = 0; i < dataPoints.length; i++ ) 
{
    dataPoints[i].drawDataPoint( "myCanvas" );
}
