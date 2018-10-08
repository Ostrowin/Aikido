app.controller('addEventsModalController', ['$scope', '$uibModalInstance',
    function ($scope, $uibModalInstance) {
        //select eventType
        $scope.eventTypeOptions = [
            { name: "Grupa dziecięca", id: 1 },
            { name: "Grupa początkująca", id: 2 },
            { name: "Grupa zaawansowana", id: 3 }
        ];
        $scope.selectedEventType = $scope.eventTypeOptions[1];

        //date picker
        $scope.today = function () {
            $scope.dt = new Date();
            $scope.dtEnd = new Date();
        };
        $scope.today();

        $scope.clear = function () {
            $scope.dt = null;
            $scope.dtEnd = null;

        };

        $scope.inlineOptions = {
            customClass: getDayClass,
            minDate: new Date(),
            showWeeks: true
        };

        $scope.dateOptions = {
            formatYear: 'yy',
            maxDate: new Date(2025, 5, 22),
            minDate: new Date(),
            startingDay: 1
        };

        // Disable weekend selection
        function disabled(data) {
            var date = data.date,
                mode = data.mode;
            return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
        }

        $scope.toggleMin = function () {
            $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
            $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
        };

        $scope.toggleMin();

        $scope.open1 = function () {
            $scope.popup1.opened = true;
        };

        $scope.open2 = function () {
            $scope.popup2.opened = true;
        };

        $scope.setDate = function (year, month, day) {
            $scope.dt = new Date(year, month, day);
            $scope.dtEnd = new Date(year, month, day);

        };
        
        $scope.format = 'yyyy/MM/dd';

        $scope.popup1 = {
            opened: false
        };

        $scope.popup2 = {
            opened: false
        };

        var tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        var afterTomorrow = new Date();
        afterTomorrow.setDate(tomorrow.getDate() + 1);
        $scope.events = [
            {
                date: tomorrow,
                status: 'full'
            },
            {
                date: afterTomorrow,
                status: 'partially'
            }
        ];

        function getDayClass(data) {
            var date = data.date,
                mode = data.mode;
            if (mode === 'day') {
                var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

                for (var i = 0; i < $scope.events.length; i++) {
                    var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

                    if (dayToCheck === currentDay) {
                        return $scope.events[i].status;
                    }
                }
            }

            return '';
        }
        //date picker
        $scope.startTime = new Date();
        $scope.endTime = new Date();

        $scope.hstep = 1;
        $scope.mstep = 1;

        $scope.ismeridian = false;
        $scope.toggleMode = function () {
            $scope.ismeridian = !$scope.ismeridian;
        };

        $scope.update = function () {
            var d = new Date();
            d.setHours(14);
            d.setMinutes(0);
            $scope.startTime = d;
        };

       /* $scope.changed = function () {
            $log.log('Time changed to: ' + $scope.startTime);
        };*/

        $scope.clearTime = function () {
            $scope.startTime = null;
        };

        $scope.eventInfo = {};
        $scope.ok = function () {
            $scope.eventInfo = {
                title: $scope.eventTitle,
                startDate: $scope.dt,
                startTime: $scope.startTime,
                endDate: $scope.dtEnd,
                endTime: $scope.endTime,
                eventType: $scope.selectedEventType
            };
            $uibModalInstance.close($scope.eventInfo);
        };

        $scope.close = function () {
            $uibModalInstance.dismiss('cancel');
        };

    }]); 

