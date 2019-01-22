import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { changeFilter } from '../../redux/display';

export const HotelFilter = ({ onChangeFilter = () => {} }) => (
    <div>
        <input onChange={event => onChangeFilter(event.target.value)} placeholder="Find facility"/>
    </div>
)

HotelFilter.propTypes = {
    onChangeFilter: PropTypes.func,
}

const mapDispatchToProps = dispatch => ({
    onChangeFilter: filterString => dispatch(changeFilter(filterString)),
})

export default connect(null, mapDispatchToProps)(HotelFilter);
