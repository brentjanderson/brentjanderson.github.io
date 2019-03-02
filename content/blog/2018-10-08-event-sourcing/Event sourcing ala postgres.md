# Event sourcing a la Postgres
BEGIN TRANSACTION
1. User connect, calls domain stored procedure
    1. Domain stored procedure does any domain validation (if any), passes command to aggregate command validation
        1. Aggregate state retrieved from tables, checked against command. Rollback on fail, generate events on success
            1.  Events passed to write_event stored procedure, which appends them to event log
                1. Event log aggregate trigger applies events to aggregate tables
                2. Event log notify trigger fires NOTIFY for subscribed consumers
                3. Event log event handler triggers fire synchronous event handlers
                    * Event handlers do something with an event
                    * Projections are event handlers that have a unique ID, store high water read mark from events table per event with ID
                    * Process managers are event handlers that store state between events in a separate table
            2. Return true
        2. Return true
    2. Return true
2. Return true
COMMIT
