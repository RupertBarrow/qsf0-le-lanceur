/* globals it, describe */

const chai = require('chai');

const assert = chai.assert;
const expect = chai.expect; // we are using the "expect" style of Chai
const leadCreate = require('./../lib/trialLeadCreate.js');

describe('org62LeadCreate', function () {

	const formBody = {
		UserFirstName: 'Trial',
		UserLastName: 'Tester',
		CompanyName: 'Enormoco',
		UserTitle: 'developer',
		UserEmail: 'shaneTest@thisismailtest123456.com',
		UserPhone: '5555555555',
		CompanyState: 'CA',
		CompanyPostalCode: '94111',
		CompanyEmployees: '5',
		CompanyCountry: 'US',
		mcloudFormName: 'GLOB_MAIN_T2L1_OCMS_LCS1',
		'Lead.LeadSource' : 'Organic+Search',
		FormCampaignId: '7010M000000nQr6QAE',
		DriverCampaignId: '70130000000sUVb'
	};

	it('sends the lead', function () {
		const result = leadCreate(formBody);
		console.log(result);

		// expect(argStripper(cmd, '-a', false)).to.equal('sfdx force:org:create -f config/project-scratch-def.json -s -d 1');
	});

});