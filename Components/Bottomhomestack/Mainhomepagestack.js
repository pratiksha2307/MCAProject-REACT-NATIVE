import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Business from './Business';
import Education from './Education';
import EducationKid from '../Data/DataEducation/EducationKid';
import EducationJunior from '../Data/DataEducation/EducationJunior';
import EducationHigher from '../Data/DataEducation/EducationHigher';
import EducationGraduation from '../Data/DataEducation/EducationGraduation';
import EducationPostGraduation from '../Data/DataEducation/EducationPostGraduation';
import EducationForeign from '../Data/DataEducation/EducationForeign';
import EducationPhd from '../Data/DataEducation/EducationPhd';
import EducationJob from '../Data/DataEducation/EducationJob';


import Health from './Health';
import HealthCancer from '../Data/DataHealth/HealthCancer';
import HealthBrain from '../Data/DataHealth/HealthBrain';
import HealthChild from '../Data/DataHealth/HealthChild';
import HealthEsophagus from '../Data/DataHealth/HealthEsophagus';
import HealthHeart from '../Data/DataHealth/HealthHeart';
import HealthKidney from '../Data/DataHealth/HealthKidney';

import Women from './Women';
import WomenEducation from '../Data/DataWomen/WomenEducation';
import WomenEmployment from '../Data/DataWomen/WomenEmployment';

import Sports from './Sports';
import SportsBadminton from '../Data/DataSports/SportsBadminton';
import SportsBasketball from '../Data/DataSports/SportsBasketball';
import SportsBicycle from '../Data/DataSports/SportsBicycle';
import SportsBoxing from '../Data/DataSports/SportsBoxing';
import SportsCricket from '../Data/DataSports/SportsCricket';

import Agriculture from './Agriculture';
import AgricultureBudget from '../Data/DataAgriculture/AgricultureBudget';
import AgricultureCensus from '../Data/DataAgriculture/AgricultureCensus';
import AgricultureCredit from '../Data/DataAgriculture/AgricultureCredit';
import AgricultureCrops from '../Data/DataAgriculture/AgricultureCrops';
import AgricultureDigital from '../Data/DataAgriculture/AgricultureDigital';
import AgricultureMarketing from '../Data/DataAgriculture/AgricultureMarketing';







export default class Mainhomepagestack extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const Stack = createStackNavigator();
        return (
            <Stack.Navigator initialRouteName='Home' headerMode='none'>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Business' component={Business} />
                <Stack.Screen name='Education' component={Education} />
                <Stack.Screen name='EducationKid' component={EducationKid} />
                <Stack.Screen name='EducationJunior' component={EducationJunior} />
                <Stack.Screen name='EducationHigher' component={EducationHigher} />
                <Stack.Screen name='EducationGraduation' component={EducationGraduation} />
                <Stack.Screen name='EducationPostGraduation' component={EducationPostGraduation} />
                <Stack.Screen name='EducationForeign' component={EducationForeign} />
                <Stack.Screen name='EducationPhd' component={EducationPhd} />
                <Stack.Screen name='EducationJob' component={EducationJob} />


                <Stack.Screen name='Health' component={Health} />
                <Stack.Screen name='HealthCancer' component={HealthCancer} />
                <Stack.Screen name='HealthBrain' component={HealthBrain} />
                <Stack.Screen name='HealthChild' component={HealthChild} />
                <Stack.Screen name='HealthEsophagus' component={HealthEsophagus} />
                <Stack.Screen name='HealthHeart' component={HealthHeart} />
                <Stack.Screen name='HealthKidney' component={HealthKidney} />




                <Stack.Screen name='Sports' component={Sports} />
                <Stack.Screen name='SportsBadminton' component={SportsBadminton} />
                <Stack.Screen name='SportsBasketball' component={SportsBasketball} />
                <Stack.Screen name='SportsBoxing' component={SportsBoxing} />
                <Stack.Screen name='SportsBicycle' component={SportsBicycle} />
                <Stack.Screen name='SportsCricket' component={SportsCricket} />

                <Stack.Screen name='Women' component={Women} />
                <Stack.Screen name='WomenEducation' component={WomenEducation} />
                <Stack.Screen name='WomenEmployment' component={WomenEmployment} />

                <Stack.Screen name='Agriculture' component={Agriculture} />
                <Stack.Screen name='AgricultureBudget' component={AgricultureBudget} />
                <Stack.Screen name='AgricultureCredit' component={AgricultureCredit} />
                <Stack.Screen name='AgricultureCensus' component={AgricultureCensus} />
                <Stack.Screen name='AgricultureCrops' component={AgricultureCrops} />
                <Stack.Screen name='AgricultureDigital' component={AgricultureDigital} />
                <Stack.Screen name='AgricultureMarketing' component={AgricultureMarketing} />


            </Stack.Navigator>
        );
    }
}