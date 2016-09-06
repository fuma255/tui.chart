/**
 * @fileoverview Test for axisDimensionCalculator.
 * @author NHN Ent.
 *         FE Development Lab <dl_javascript@nhnent.com>
 */

'use strict';

var axisDimensionCalculator = require('../../src/js/boundsModels/axisDimensionCalculator');
var renderUtil = require('../../src/js/helpers/renderUtil');

describe('Test for LegendDimensionModel', function() {
    beforeAll(function () {
        spyOn(renderUtil, 'getRenderedLabelWidth').and.returnValue(50);
        spyOn(renderUtil, 'getRenderedLabelHeight').and.returnValue(20);
    });

    describe('calculateXAxisHeight()', function() {
        it('calculate height for x axis', function() {
            var actual = axisDimensionCalculator.calculateXAxisHeight('Axis Title', {});

            expect(actual).toBe(60);
        });
    });

    describe('calculateYAxisWidth()', function() {
        it('calculate width for y axis', function() {
            var actual;

            actual = axisDimensionCalculator.calculateYAxisWidth(['label1', 'label12'], {
                title: 'Axis Title'
            }, {});

            expect(actual).toBe(87);
        });

        it('calculate width for y axis, when rotateTitle option is false', function() {
            var actual;

            actual = axisDimensionCalculator.calculateYAxisWidth(['label1', 'label12'], {
                title: 'Axis Title',
                rotateTitle: false
            }, {});

            expect(actual).toBe(117);
        });

        it('calculate width for y axis, when isCenter option is true', function() {
            var actual;

            actual = axisDimensionCalculator.calculateYAxisWidth(['label1', 'label12'], {
                title: 'Axis Title',
                isCenter: true
            }, {});

            expect(actual).toBe(64);
        });
    });
});
