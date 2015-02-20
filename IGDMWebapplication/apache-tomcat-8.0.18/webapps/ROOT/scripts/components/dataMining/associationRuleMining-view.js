
/*--------------------------------------------------------------------------------
 Author: Xiaodong Sun
 Date: 2/2/15
 petroleum-explorer
 =============================================================================
 Filename: associationRuleMining-view.js
 =============================================================================
 View class of the Association Rule Mining module.
 -------------------------------------------------------------------------------*/

(function () {

    // Controlling the active item of the accordion
    var optionAccordion = 0;	// Variable for handling accordion option
    (function () {
        $(function () {
            var active;
            active = function () {
                return visualizationAccordiondataming.on("click", function () {
                    optionAccordion = $("#visualizationAccordion-dataming").accordion( "option", "active" );
                });
            };
            active();
        });
    }).call(this);

    var content = $("#classificationContent");
    var visualizationAccordiondataming = content.find("#classificationAccordion");
    var associationRuleButton = $("#association-rule-button");

    // Event that will be triggered when the ARM button is clicked
    $('#association-rule-button').on("click",function() {
        //classifyWells();
        window.open ("http://localhost:8080/WekaCluster.htm");
    });


    /*
     * Function to classify the wells. The method will depend on the option selected by the user.
     * The accordion options are:
     * 0 - categorical classification; 1 - numerical classification; 2 - k-means; 3 - association rule mining
     */
    function classifyWells() {
        window.alert("Call R package to so Association Rule Mining! " +
            "http://stackoverflow.com/questions/17665565/is-there-a-way-to-run-r-code-from-javascript" +
        "http://ramnathv.github.io/posts/making-rcharts-live-app/index.html"
        );

    }


}).call(this);