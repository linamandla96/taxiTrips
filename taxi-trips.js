module.exports = function(pool) {

async function findAllRegions(){
var findAll = await pool.query('select * from region');
return findAll.rows;
}

async function findTotalIncomePerTaxi(income){
var totalPerTaxi = await pool.query('select sum(fare) from routes where name = $1',[income]);
return totalPerTaxi.rows;

}
async function findTotalIncome(name){
var totaIncome = await pool.query('select sum(fare) from routes where name = $1' [name]);
return totaIncome.row;
}
async function findIncomeByRegNumbers(){
var incomeByReg = await pool.query('select sum(fare) from routes Join taxi on taxi.routes_id = routes.id order by reg_no ');
return incomeByReg.rows;
}
async function findTripsByRegion(name){
var tripsByRegion = await pool.query('select taxi_id,region_id from trip Join on region.id = trips.region_id group by name ');
return tripsByRegion.rows;
}
async function totalTripCount(){
  var  countTrips = await pool.query('select count(*) from trip');
  return countTrips.rows;

}
async function findTaxisForRegion(){
var findTAxi = await pool.query('select id,reg_no from taxi join region on region.id = taxi.region_id order by name');
return findTaxisForRegion.rows
}
async function findAllTaxiForRegion(){
var allTaxi = await pool.query('select * from taxi')
}
return{
findAllRegions,
findTotalIncomePerTaxi,
findTotalIncome,
findIncomeByRegNumbers,
findTripsByRegion,
findTaxisForRegion,
totalTripCount

}


}