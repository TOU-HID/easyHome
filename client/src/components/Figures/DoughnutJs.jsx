import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      display: true,
      fontSize: '15px',
    },

    title: {
      display: true,
      text: 'Your Yearly Income From Rented Properties',
      color: '#000000',
    },
  },
};
function DoughnutJs() {
  const { loggedInUsers } = useSelector((state) => state.user);
  const { houseList } = useSelector((state) => state.house);
  //   console.log(loggedInUsers);
  //   console.log(houseList);
  const labels = houseList
    .filter((house) => {
      return house.postby === loggedInUsers[0]._id;
    })
    .filter((house) => {
      return house.isbooked === true;
    })
    .map((house) => house.housename);

  const monthlyMaintanenceCost = houseList
    .filter((house) => {
      return house.postby === loggedInUsers[0]._id;
    })
    .filter((house) => {
      return house.isbooked === true;
    })
    .map((house) => house.monthlyMaintenanceCost);
  const monthlyRent = houseList
    .filter((house) => {
      return house.postby === loggedInUsers[0]._id;
    })
    .filter((house) => {
      return house.isbooked === true;
    })
    .map((house) => house.rent);

  const yearlyRent = monthlyRent.map((rent) => rent * 12);
  let totalYearlyMaintanenceCost = 0;
  const yearlyMaintanenceCost = monthlyMaintanenceCost.map(
    (maintanenceCost) => {
      totalYearlyMaintanenceCost += maintanenceCost * 12;
      return maintanenceCost * 12;
    }
  );
  labels.push('Yearly total maintenance cost');
  yearlyRent.push(totalYearlyMaintanenceCost * 10);

  const data = {
    labels: labels,
    datasets: [
      {
        data: yearlyRent,
        backgroundColor: [
          // '#C1311C',

          'rgba(54, 162, 235,0.6 )',
          'rgba(255, 206, 86,0.6  )',
          'rgba(75, 192, 192,0.6 )',
          '#9966FF',
          '#f88379',
          'rgba(54, 162, 235,0.6 )',
        ],
        borderColor: [
          'rgb(54, 162, 235)',
          'rgb(255, 206, 86)',
          'rgb(75, 192, 192)',
          '#9966FF',
          '#f88379',
          'rgb(54, 162, 235)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <Doughnut options={options} data={data} />
    </div>
  );
}

export default DoughnutJs;
