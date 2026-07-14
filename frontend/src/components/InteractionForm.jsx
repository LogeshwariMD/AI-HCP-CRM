import { useSelector } from "react-redux";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Grid,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Checkbox,
  FormControlLabel,
  Divider,
} from "@mui/material";

function InteractionForm() {
  const interaction = useSelector((state) => state.interaction);

  return (
    <Card elevation={3}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Interaction Details
        </Typography>

        <Divider sx={{ mb: 3 }} />

        <Grid container spacing={2}>
          {/* HCP Name */}
          <Grid item xs={12}>
            <TextField
              label="HCP Name"
              value={interaction.hcpName || ""}
              fullWidth
              disabled
            />
          </Grid>

          {/* Date */}
          <Grid item xs={6}>
            <TextField
              label="Date"
              value={interaction.date || ""}
              fullWidth
              disabled
            />
          </Grid>

          {/* Time */}
          <Grid item xs={6}>
            <TextField
              label="Time"
              value={interaction.time || ""}
              fullWidth
              disabled
            />
          </Grid>

          {/* Interaction Type */}
          <Grid item xs={12}>
            <FormControl fullWidth disabled>
              <InputLabel>Interaction Type</InputLabel>

              <Select
                value={interaction.interactionType || ""}
                label="Interaction Type"
              >
                <MenuItem value="Visit">Visit</MenuItem>
                <MenuItem value="Call">Call</MenuItem>
                <MenuItem value="Virtual Meeting">
                  Virtual Meeting
                </MenuItem>
                <MenuItem value="Email">Email</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Topics */}
          <Grid item xs={12}>
            <TextField
              label="Topics Discussed"
              multiline
              rows={3}
              fullWidth
              disabled
              value={
                Array.isArray(interaction.topics)
                  ? interaction.topics.join(", ")
                  : interaction.topics || ""
              }
            />
          </Grid>

          {/* Materials */}
          <Grid item xs={12}>
            <Typography fontWeight={600} mb={1}>
              Materials Shared
            </Typography>

            <FormControlLabel
              control={
                <Checkbox
                  checked={
                    interaction.materials?.includes("Brochure") ||
                    interaction.materials?.includes("brochure")
                  }
                  disabled
                />
              }
              label="Brochure"
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={
                    interaction.materials?.includes("Clinical Study")
                  }
                  disabled
                />
              }
              label="Clinical Study"
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={
                    interaction.materials?.includes("Presentation")
                  }
                  disabled
                />
              }
              label="Presentation"
            />
          </Grid>

          {/* Samples */}
          <Grid item xs={12}>
            <TextField
              label="Samples Distributed"
              value={interaction.samples || ""}
              fullWidth
              disabled
            />
          </Grid>

          {/* Sentiment */}
          <Grid item xs={12}>
            <FormControl fullWidth disabled>
              <InputLabel>Sentiment</InputLabel>

              <Select
                value={interaction.sentiment || ""}
                label="Sentiment"
              >
                <MenuItem value="Positive">Positive</MenuItem>
                <MenuItem value="Neutral">Neutral</MenuItem>
                <MenuItem value="Negative">Negative</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Outcome */}
          <Grid item xs={12}>
            <TextField
              label="Outcome"
              multiline
              rows={2}
              fullWidth
              disabled
              value={interaction.outcome || ""}
            />
          </Grid>

          {/* Follow-up */}
          <Grid item xs={12}>
            <TextField
              label="Follow-up"
              multiline
              rows={2}
              fullWidth
              disabled
              value={interaction.followUp || ""}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default InteractionForm;