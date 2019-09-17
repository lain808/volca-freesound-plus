import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Freesound.css';
import fetchSounds from '../../../actions/fetchSounds.actions';
import { setDurationMax, setTagQuery } from '../../../actions/volca.actions';
import FormControl from '../../molecules/FormControl';
import Row from '../../atoms/Row';
import Section from '../../molecules/Section';

class Freesound extends React.PureComponent {
  static propTypes = {
    count: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired,
    durationMax: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
    tagQuery: PropTypes.oneOfType([PropTypes.string]).isRequired,
    isStarted: PropTypes.bool.isRequired,
  };

  static defaultProps = {};

  /**
   * When the component mounts:
   * Get the total amount of available sounds from Freesound.
   */
  componentDidMount() {
    this.props.dispatch(
      fetchSounds({
        query: '',
        page: 1,
        pageSize: 1,
      }),
    );
  }

  render() {
    const { count, dispatch, durationMax, tagQuery, isStarted } = this.props;

    return (
      <Section title="Freesound settings">
        <Row>
          <FormControl
            disabled={isStarted ? 'disabled' : ''}
            id="duration_max"
            label="Max. duration"
            max="none"
            min="0"
            onChange={e => {
              e.preventDefault();
              dispatch(setDurationMax(e.target.value));
              dispatch(
                fetchSounds({
                  query: '',
                  page: 1,
                  pageSize: 1,
                }),
              );
            }}
            type="number"
            value={durationMax}
          />
        </Row>
        <Row>
          <FormControl
            disabled={isStarted ? 'disabled' : ''}
            id="tag_query"
            label="Tag"
            max="none"
            min="0"
            onChange={e => {
              e.preventDefault();
              dispatch(setTagQuery(e.target.value));
              dispatch(
                fetchSounds({
                  query: '',
                  page: 1,
                  pageSize: 1,
                }),
              );
            }}
            type="text"
            value={tagQuery}
          />
        </Row>
        <Row>
          <span className={s.samplecount}>
            {count > 0
              ? `${count} samples found`
              : `No samples available, please check tag spelling.`}
          </span>
        </Row>
      </Section>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.sounds.count,
    durationMax: state.sounds.durationMax,
    tagQuery: state.sounds.tagQuery,
    isStarted: state.sounds.isStarted,
  };
}

export default compose(
  withStyles(s),
  connect(mapStateToProps),
)(Freesound);
